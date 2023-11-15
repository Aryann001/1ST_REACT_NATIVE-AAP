import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import { useDispatch } from "react-redux";
import { deleteTask, getMyProfile, updateTask } from "../redux/actions/action";

const Task = (props) => {
  const { _id, title, description, completed: status } = props;

  const dispatch = useDispatch();

  const [completed, setCompleted] = useState(status);

  const updateTaskHandler = () => {
    setCompleted(!completed);
    dispatch(updateTask(_id));
  };

  const deleteTaskHandler = async () => {
    await dispatch(deleteTask(_id));
    dispatch(getMyProfile());
  };

  return (
    <View style={style.taskContainer}>
      <View style={style.taskContainerView}>
        <Text style={style.taskHeading}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={style.taskContainerview2}>
        <Checkbox
          status={completed ? "checked" : "unchecked"}
          color="black"
          onPress={updateTaskHandler}
        />
        <Icon
          name="cross"
          color={"black"}
          style={style.removeBtn}
          onPress={deleteTaskHandler}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  taskContainer: {
    height: "max-content",
    width: "90%",
    alignSelf: "center",
    paddingVertical: 15,
    marginBottom: 5,
    backgroundColor: "silver",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
  },

  taskContainerView: {
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "60%",
  },

  taskHeading: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    borderBottomColor: "black",
  },

  taskDescription: {
    height: "max-content",
  },

  taskContainerview2: {
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },

  removeBtn: {
    fontSize: 25,
  },
});

export default Task;
