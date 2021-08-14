import React, { useEffect } from 'react';

// ?lib third party
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// ? api
import {
  loginAuthorizeSpotify,
  getAccessTokenFromURL,
} from '../../api/authSpotify';
import { getProfile } from '../../api/apiSpotify';

// ! reducer area
import { login, storeUserData } from 'redux/userSlice';

// ? style import css
import { Flex, Heading, Text, Button } from '@chakra-ui/react';

import style from './home.module.css';

const Home = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      dispatch(login(access_token));
      getProfile(access_token).then((data) => dispatch(storeUserData(data)));
      history.push('/create-playlist');
    }
  }, [dispatch, history]);

  return (
    <Flex
      height="100vh"
      flexDirection="column"
      p={10}
      alignItems="center"
      justifyContent="center"
      className={style['wrapper-home']}
    >
      <Heading as="h4" size="2xl">
        HEAVEN = MUSIC
      </Heading>

      <Text>Make your life better with music</Text>
      <Text mb={5}>flight to the imagination and life to everything.</Text>
      <Button
        className={style['btn-login']}
        id="btn-login"
        onClick={loginAuthorizeSpotify}
        variant="solid"
        width="200px"
        bg="#1db954"
        type="button"
      >
        Please Login First
      </Button>
    </Flex>
  );
};

export default Home;
