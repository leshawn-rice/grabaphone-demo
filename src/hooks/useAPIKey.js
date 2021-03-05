import { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';

const useAPIKey = () => {
  const [key, setKey] = useState(null)

  const createKey = async () => {
    const result = await axios.get('https://grabaphone.herokuapp.com/generate-api-key');
    const $page = $(result.data)
    const newKey = $page.find('strong').text();
    setKey(oldKey => newKey);
  }
  return [key, createKey]
}

export default useAPIKey;