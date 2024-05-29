import { useEffect, useState } from "react";
import { apiBaseUrl } from "../../common/Constants";


export function fetchApi() {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function getData(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log(json);
        return json;
      } catch (error){
        console.error(error);
      }
    }

    getData(apiBaseUrl + "/online-shop")
  }, [])
}