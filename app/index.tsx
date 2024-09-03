import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

export default function Index() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <View>
      <TextInput placeholder="Enter text 1" />
      <DatePickerInput
        locale="en"
        label="Enter date"
        value={date}
        onChange={(d) => setDate(d)}
        inputMode="start"
      />
      <TextInput placeholder="Enter text 2" />
      <TextInput placeholder="Enter text 3" />
    </View>
  );
}
