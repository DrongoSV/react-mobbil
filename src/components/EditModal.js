import React, { useState} from "react";
import { View, StyleSheet, TextInput, Button, Modal, Alert } from "react-native";

export const EditModal = ({ visible, onCancel, value, onSave}) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
      if (title.trim().length < 3) {
          Alert.alert("Ошибка!", `Сейчас длина состовляет ${title.trim().length}`)
      } else {
          onSave(title);
      }
    };
    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                  value={title}
                  onChangeText={setTitle}
                  style={styles.input}
                  placeholder="Введите название"
                  maxLength={64}
                />
                <View style={styles.bettons}>
                    <Button title="Отменить" color="#e53935" onPress={onCancel} />
                    <Button title="Сохранить" onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wrap: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      padding: 10,
      borderBottomColor: '#76587b',
      borderBottomWidth: 2,
      width: '80%',
    },
    buttons: {
      width: '100%',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });