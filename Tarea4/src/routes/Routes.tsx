import React from 'react';
import {NativeRouter, Route, Link, Switch} from 'react-router-native';
import AlbumDetails from '../components/molecules/AlbumDetails';
import AlbumList from '../components/organisms/AlbumList';

const Routes = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route path="/details" component={AlbumDetails} />
        <Route path="/" component={AlbumList} />
      </Switch>
    </NativeRouter>
  );
};

export default Routes;
