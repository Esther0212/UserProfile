import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";

const HomeScreen = () => {
  const [editing, setEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    location: "",
    dob: "",
    aboutMe: "",
    occupation: "",
    education: "",
    website: "",
    hobbies: "",
    skills: "",
    profilePicture: require("../../assets/images/profile.jpg"),
    coverPicture: require("../../assets/images/cover.jpg"),
  });

  const saveProfile = () => {
    setEditing(false);
    Alert.alert("Profile Saved", "Your profile information has been saved.");
  };

  const deleteProfile = () => {
    setProfileData({
      fullName: "",
      username: "",
      email: "",
      phone: "",
      location: "",
      dob: "",
      aboutMe: "",
      occupation: "",
      education: "",
      website: "",
      hobbies: "",
      skills: "",
      profilePicture: require("../../assets/images/profile.jpg"),
      coverPicture: require("../../assets/images/cover.jpg"),
    });
    Alert.alert("Profile Deleted", "All profile information has been cleared.");
  };

  const handleChange = (key, value) => {
    setProfileData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.coverImageContainer}>
          <Image source={profileData.coverPicture} style={styles.coverImage} />
        </View>

        <View style={styles.profileImageContainer}>
          <Image
            source={profileData.profilePicture}
            style={styles.profileImage}
          />
        </View>

        {/* Full Name Row */}
        <View style={styles.row}>
          {editing ? (
            <>
              <Text style={styles.label}>Full Name:</Text>
              <TextInput
                style={styles.input}
                value={profileData.fullName}
                onChangeText={(value) => handleChange("fullName", value)}
                placeholder="Full Name"
              />
            </>
          ) : (
            <Text style={[styles.value, styles.boldValue, styles.centeredText]}>
              {profileData.fullName === "" ? "-" : profileData.fullName}
            </Text>
          )}
        </View>

        {/* Username Row */}
        <View style={styles.row}>
          {editing ? (
            <>
              <Text style={styles.label}>Username:</Text>
              <TextInput
                style={styles.input}
                value={profileData.username}
                onChangeText={(value) => handleChange("username", value)}
                placeholder="Username"
              />
            </>
          ) : (
            <Text style={[styles.value, styles.centeredText]}>
              {profileData.username === "" ? "-" : profileData.username}
            </Text>
          )}
        </View>

        <View style={styles.horizontalLine} />
        <Text style={styles.sectionTitle}>Basic Information</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.email}
              onChangeText={(value) => handleChange("email", value)}
              placeholder="Email"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.email === "" ? "-" : profileData.email}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.phone}
              onChangeText={(value) => handleChange("phone", value)}
              placeholder="Phone"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.phone === "" ? "-" : profileData.phone}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Location:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.location}
              onChangeText={(value) => handleChange("location", value)}
              placeholder="Location"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.location === "" ? "-" : profileData.location}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.dob}
              onChangeText={(value) => handleChange("dob", value)}
              placeholder="Date of Birth"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.dob === "" ? "-" : profileData.dob}
            </Text>
          )}
        </View>

        <View style={styles.horizontalLine} />
        <Text style={styles.sectionTitle}>Profile Details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>About Me:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.aboutMe}
              onChangeText={(value) => handleChange("aboutMe", value)}
              placeholder="About Me"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.aboutMe === "" ? "-" : profileData.aboutMe}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Occupation:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.occupation}
              onChangeText={(value) => handleChange("occupation", value)}
              placeholder="Occupation"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.occupation === "" ? "-" : profileData.occupation}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Education:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.education}
              onChangeText={(value) => handleChange("education", value)}
              placeholder="Education"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.education === "" ? "-" : profileData.education}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Website:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.website}
              onChangeText={(value) => handleChange("website", value)}
              placeholder="Website"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.website === "" ? "-" : profileData.website}
            </Text>
          )}
        </View>

        <View style={styles.horizontalLine} />
        <Text style={styles.sectionTitle}>Interests and Preferences</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Hobbies:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.hobbies}
              onChangeText={(value) => handleChange("hobbies", value)}
              placeholder="Hobbies"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.hobbies === "" ? "-" : profileData.hobbies}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Skills:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.skills}
              onChangeText={(value) => handleChange("skills", value)}
              placeholder="Skills"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.skills === "" ? "-" : profileData.skills}
            </Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={editing ? saveProfile : () => setEditing(true)}
          >
            <Text style={styles.buttonText}>
              {editing ? "Save Changes" : "Edit Profile"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={deleteProfile}
          >
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  coverImageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#eee",
    marginBottom: 40,
    borderRadius: 20,
  },
  coverImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  profileImageContainer: {
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ddd",
    marginTop: -80,
    marginBottom: 40,
    borderWidth: 5,
    borderColor: "#fff",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    flex: 1,
    fontWeight: "bold",
    color: "#333",
    fontSize: 16,
  },
  value: {
    flex: 2,
    fontSize: 16,
    color: "#555",
  },
  centeredText: {
    textAlign: "center", // Center the text
    flex: 1, // Allow the text to take equal space in the row
  },  
  boldValue: {
    fontWeight: "bold",
    fontSize: 30,
    color: 'black',
  },
  input: {
    flex: 2,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    marginBottom: 20,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  editButton: {
    backgroundColor: "#333",
  },
  deleteButton: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
