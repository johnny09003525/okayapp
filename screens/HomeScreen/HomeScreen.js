import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import GeneralBar from '../../components/GeneralBar';
import {getListFunction} from './HomeViewModel';

import {updateFavouriteList} from '../../redux/list';
import FlatItemList from '../../components/FlatItemList';

const mapStateToProps = state => {
  return {
    favouriteList: state.listState.favouriteList,
  };
};

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    // console.log(navigation);

    let titleBar = 'Home';

    let json = {
      headerTitle: <GeneralBar customTitle={titleBar} />,
      gesturesEnabled: false,
    };

    return json;
  };

  constructor(props) {
    super(props);
    this.state = {listArray: []};
  }

  componentDidUpdate(prevProps, prevState) {}

  componentDidMount() {
    getListFunction(
      listArray => {
        // console.log(listArray);
        this.setState({listArray});
      },
      error => {
        console.log(error);
      },
    );
  }

  render() {
    const {listArray} = this.state;
    return (
      <View style={styles.container}>
        <FlatItemList
          data={listArray}
          favouriteList={this.props.favouriteList}
          updateFavouriteList={item => {
            this.props.updateFavouriteList(item);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

HomeScreen.propTypes = {
  favouriteList: PropTypes.array,
  updateFavouriteList: PropTypes.func,
};

export default connect(mapStateToProps, {updateFavouriteList})(HomeScreen);
