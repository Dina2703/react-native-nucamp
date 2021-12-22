import React, { Component } from "react";
import { FlatList, ScrollView, Text } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

{
  /*the function receives the state as a prop and returns the partners data from the state. We don't need entite state, we only need a part of it. */
}
const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

function Mission() {
  return (
    <Card title={"Our Mission"}>
      <Text style={{ margin: 10 }}>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
}

class About extends Component {

  static navigationOptions = {
    title: "About Us",
  };
  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: {uri: baseUrl + item.image}}}
        ></ListItem>
      );
    };
    return (
      <ScrollView>
        <Mission />
        <Card title={"Community Partners"}>
          <FlatList
          {/* first partners includes the isLoading. errMess and partners array props. We need the partners data array */}
            data={this.props.partners.partners}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPartner}
          ></FlatList>
        </Card>
      </ScrollView>
    );
  }
}

{/*Connect the component to the Redux store, so About component can receive the partners props from the Redux store */}
export default connect(mapStateToProps)(About);
