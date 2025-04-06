import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonText,
  IonLoading,
  IonToast,
  IonProgressBar,
} from "@ionic/react";
import {
  playCircleOutline,
  volumeHighOutline,
  musicalNoteOutline,
} from "ionicons/icons";
import "./AlphabetPage.css";
import { LetterData } from "../data/alphabet-data";

const AlphabetPage: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const [playingSong, setPlayingSong] = useState(false);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Simulate loading and check if data is available
  useEffect(() => {
    console.log("AlphabetPage mounted");

    try {
      // Log that we have data
      console.log("LetterData available:", LetterData.length > 0);

      // Simulate loading
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } catch (err) {
      console.error("Error loading alphabet data:", err);
      setError("Failed to load alphabet data");
      setLoading(false);
    }
  }, []);

  // Function to handle letter click
  const handleLetterClick = (letter: string) => {
    console.log("Letter clicked:", letter);
    setSelectedLetter(letter);

    // Optional: Pronounce the letter if Web Speech API is available
    try {
      if ("speechSynthesis" in window) {
        setSpeaking(true);
        const utterance = new SpeechSynthesisUtterance(letter);
        utterance.onend = () => setSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    } catch (err) {
      console.error("Speech synthesis error:", err);
      setSpeaking(false);
    }
  };

  // Function to play the ABC song
  const playABCSong = () => {
    if (!window.speechSynthesis) {
      setError("Speech synthesis not available in your browser");
      return;
    }

    // Cancel any current speech
    window.speechSynthesis.cancel();

    setPlayingSong(true);
    setSpeaking(true);

    // The ABC song lyrics
    const songLyrics =
      "A B C D E F G, " +
      "H I J K L M N O P, " +
      "Q R S T U V, " +
      "W X Y and Z. " +
      "Now I know my ABCs, " +
      "Next time won't you sing with me?";

    const utterance = new SpeechSynthesisUtterance(songLyrics);

    // Set a slightly slower rate for better clarity
    utterance.rate = 0.8;
    utterance.pitch = 1.2;

    // Handle song completion
    utterance.onend = () => {
      setSpeaking(false);
      setPlayingSong(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Function to find image data for selected letter
  const getLetterImages = () => {
    if (!selectedLetter) return null;

    try {
      const letterInfo = LetterData.find(
        (item) => item.letter === selectedLetter
      );

      console.log("Letter info for", selectedLetter, ":", letterInfo);

      return letterInfo ? letterInfo.images : [];
    } catch (err) {
      console.error("Error getting letter images:", err);
      return [];
    }
  };

  // Function to speak a word
  const speakWord = (word: string) => {
    try {
      if ("speechSynthesis" in window) {
        setSpeaking(true);
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.onend = () => setSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    } catch (err) {
      console.error("Speech synthesis error:", err);
      setSpeaking(false);
    }
  };

  const letterImages = getLetterImages();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ABC Game</IonTitle>
          {speaking && (
            <IonProgressBar
              type="indeterminate"
              color="secondary"
            ></IonProgressBar>
          )}
        </IonToolbar>
      </IonHeader>

      <IonLoading isOpen={loading} message="Loading alphabet..." />

      <IonToast
        isOpen={!!error}
        message={error || ""}
        duration={3000}
        onDidDismiss={() => setError(null)}
        color="danger"
      />

      <IonContent fullscreen>
        {!loading && (
          <div className="alphabet-container">
            <div className="letters-section">
              <div className="letters-grid">
                {alphabet.map((letter) => (
                  <IonButton
                    key={letter}
                    expand="block"
                    className={`letter-button ${
                      selectedLetter === letter ? "selected" : ""
                    }`}
                    onClick={() => handleLetterClick(letter)}
                  >
                    {letter}
                  </IonButton>
                ))}
                {/* ABC Song Button */}
                <IonButton
                  expand="block"
                  className="abc-song-button"
                  onClick={playABCSong}
                  disabled={playingSong}
                >
                  <div className="song-button-content">
                    <IonIcon icon={musicalNoteOutline} />
                    <span>ABC Song</span>
                  </div>
                </IonButton>
              </div>
            </div>

            {selectedLetter && (
              <div className="detail-section">
                <div className="letter-detail">
                  <h2>
                    Letter {selectedLetter}
                    <IonButton
                      fill="clear"
                      size="small"
                      onClick={() => handleLetterClick(selectedLetter)}
                    >
                      <IonIcon slot="icon-only" icon={volumeHighOutline} />
                    </IonButton>
                  </h2>

                  {letterImages && letterImages.length > 0 ? (
                    <div className="images-container">
                      {letterImages.map((image, index) => (
                        <IonCard className="image-card" key={index}>
                          <img
                            src={image.src}
                            alt={image.word}
                            onError={(e) => {
                              console.error(
                                `Image load error for ${image.word}:`,
                                e
                              );
                              // Set a fallback image on error
                              (e.target as HTMLImageElement).src =
                                "https://via.placeholder.com/500x300?text=Image+Not+Found";
                            }}
                          />
                          <IonCardContent>
                            <div className="word-container">
                              <IonText>
                                <h3>{image.word}</h3>
                              </IonText>
                              <IonButton
                                fill="clear"
                                size="small"
                                onClick={() => speakWord(image.word)}
                              >
                                <IonIcon
                                  slot="icon-only"
                                  icon={volumeHighOutline}
                                />
                              </IonButton>
                            </div>
                          </IonCardContent>
                        </IonCard>
                      ))}
                    </div>
                  ) : (
                    <p>No images available for this letter</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AlphabetPage;
