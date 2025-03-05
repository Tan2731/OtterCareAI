import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from "react";
import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  const [message, setMessage] = useState("");

  return (
    <div className="chatbot-container">
      <div className="chatbot-box">
        {/* Chatbot Header */}
        <h1 className="chatbot-header">OtterCareAI</h1>
        <p className="chatbot-subtext">
          Ask me a question:
        </p>

        {/* Chat Input Box */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={() => console.log(message)} 
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
