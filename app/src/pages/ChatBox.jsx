import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'; 

const ChatBox = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");

  const sendMessageToCoze = async (userInput) => {
    try {
      const response = await fetch(' https://api.coze.com/v3/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'pat_gqnw5ZXGH7jo9Go3WeKe3GzgipixCCZNJLMm9MDnC3WlI5bnBuVG4NOLeIxdYVZD' 
        },
        body: JSON.stringify({
          bot_id: '7481567734736928774',     
          user: 'csumb-user',             
          stream: false
        })
      });
  
      const data = await response.json();

      console.log("Full Coze API response:", data);

      const reply = data?.messages?.[0]?.content || "No response from AI.";
      return reply;
  
    } catch (error) {
      console.error('Error contacting Coze:', error);
      return "Oops, something went wrong!";
    }
  };

  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]); // Optional: show conversation

const handleSend = async () => {
  if (!message.trim()) return;

  const userMessage = message;
  setMessage(''); 
  setChatHistory(prev => [...prev, { from: 'user', text: userMessage }]);

  console.log("Sending message to Coze:", userMessage);

  const aiReply = await sendMessageToCoze(userMessage);

  console.log("Received reply from Coze:", aiReply);

  setChatHistory(prev => [...prev, { from: 'bot', text: aiReply }]);
};


  const quickQuestions = [
    "CSUMB Admission",
    "CSUMB Academic Support",
    "CSUMB Majors",
    "CSUMB Student Life",
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../images/logo.png")} style={styles.logo} />
        <Text style={styles.title}>OTTERCARE AI</Text>

        {/* Login Button */}
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
      </View>

      {/* AI Prompt */}
      <View style={styles.promptContainer}>
        <Image source={require("../images/logo.png")} style={styles.otterIcon} />
        <Text style={styles.promptText}>Ask our AI anything</Text>
      </View>

      {/* Quick Questions */}
      <View style={styles.quickQuestionsContainer}>
        {quickQuestions.map((question, index) => (
          <TouchableOpacity key={index} style={styles.questionButton}>
            <Text style={styles.questionText}>{question}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me anything about CSUMB"
          placeholderTextColor="#666"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendIcon}>➤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ maxHeight: 400 }}>
        {chatHistory.map((msg, index) => (
        <View
         key={index}
        style={{
        alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
        backgroundColor: msg.from === 'user' ? '#dbeafe' : '#e5e7eb',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        maxWidth: '80%'
      }}
    >
      <Text>{msg.text}</Text>
    </View>
  ))}
</ScrollView>


      {/* Footer */}
      <Text style={styles.footer}>
        © Copyright California State University of Monterey Bay 2025
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e3e7",
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a5d72",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "relative",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "monospace",
  },
  loginButton: {
    position: "absolute",
    right: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  promptContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  otterIcon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  promptText: {
    fontSize: 18,
    color: "#333",
    marginTop: 10,
  },
  quickQuestionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  questionButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  questionText: {
    fontSize: 14,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  sendButton: {
    marginLeft: 10,
  },
  sendIcon: {
    fontSize: 20,
    color: "#4a5d72",
  },
  footer: {
    position: "absolute",
    bottom: 10,
    fontSize: 12,
    color: "#555",
  },
});

export default ChatBox;
