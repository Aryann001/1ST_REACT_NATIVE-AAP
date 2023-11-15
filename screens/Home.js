import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import Icon from "react-native-vector-icons/Ionicons";
import { Button, Dialog } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addTask, clearErrors, getMyProfile } from "../redux/actions/action";

const Home = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { error, message, loading } = useSelector((state) => state.task);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addOpen, setAddOpen] = useState(false);

  const addTaskHandler = async () => {
    await dispatch(addTask(title, description));
    dispatch(getMyProfile());
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [dispatch, error, message, alert]);

  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <ScrollView>
          <SafeAreaView>
            <Text style={style.heading}>ALL TASKS</Text>

            {user &&
              user.tasks.length !== 0 &&
              user.tasks.map((task) => <Task key={task._id} {...task} />)}

            <TouchableOpacity
              style={style.addTaskBtn}
              onPress={() => setAddOpen(!addOpen)}
            >
              <Text>ADD TASK </Text>
              <Icon name="add-sharp" size={18} color={"black"} />
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </View>

      <Dialog
        visible={addOpen}
        onDismiss={() => setAddOpen(!addOpen)}
        style={{ gap: 10 }}
      >
        <Dialog.Title>WRITE A TASK</Dialog.Title>
        <Dialog.Content style={{ gap: 20 }}>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity onPress={() => setAddOpen(!addOpen)}>
              <Button textColor="black">Cancel</Button>
            </TouchableOpacity>

            <TouchableOpacity>
              <Button
                textColor="white"
                style={{ backgroundColor: "black", borderRadius: 0 }}
                onPress={addTaskHandler}
                disabled={!title || loading ? true : false}
              >
                Add
              </Button>
            </TouchableOpacity>
          </View>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 28,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
    paddingVertical: 20,
    color: "#fff",
    backgroundColor: "#474747",
  },

  addTaskBtn: {
    color: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: 20,
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 100,
    elevation: 5,
  },
});

export default Home;
