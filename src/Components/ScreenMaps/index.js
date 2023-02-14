import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

function Message({ message }) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <View>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem aqui"
        />
        <Button title="Enviar" onPress={handleSend} />
      </View>
    </View>
  );
}

export default ChatScreen;
