/* eslint-disable */
import React, { useEffect, useState, Fragment } from "react";
import Header from "./components/header";
import Toys from "./../../components/toyBox";
import "./index.scss";
import PropTypes from "prop-types";
import api from "./../../services/api";
import { useSelector, useDispatch } from "react-redux";
import { boxClicked } from "./../../redux/boxToyos/index";

export default function ToysAndBoxes() {
  const blockchain = useSelector((state) => state.blockchain);
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const path = window.location.pathname;
  const fileImg =
    "https://res.cloudinary.com/groovin/image/upload/v1637826561/Toyo/img1_veodwm.png";

  useEffect(async () => {
    if (path == "/parts") {
      await api
        .get("/ToyoBox/getParts", {
          params: {
            walletAddress: blockchain.account,
            chainId: parseInt(blockchain.chainId, 16),
          },
        })
        .then((response) => setFiles(response.data))
        .catch((error) => {
          console.log(error);
        });
    } else if (path == "/toyos") {
      await api
        .get("/ToyoBox/getToyos", {
          params: {
            walletAddress: blockchain.account,
            chainId: parseInt(blockchain.chainId, 16),
          },
        })
        .then((response) => setFiles(response.data))
        .catch((error) => {
          console.log(error);
        });
    } else if (path == "/items" || path == "/") {
      await api
        .get("/ToyoBox/getBoxes", {
          params: {
            walletAddress: blockchain.account,
            chainId: parseInt(blockchain.chainId, 16),
          },
        })
        .then((response) => setFiles(response.data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(async () => {
    setTimeout(async () => {
      if (path == "/parts") {
        await api
          .get("/ToyoBox/getParts", {
            params: {
              walletAddress: blockchain.account,
              chainId: parseInt(blockchain.chainId, 16),
            },
          })
          .then((response) => setFiles(response.data))
          .catch((error) => {
            console.log(error);
          });
      } else if (path == "/toyos") {
        await api
          .get("/ToyoBox/getToyos", {
            params: {
              walletAddress: blockchain.account,
              chainId: parseInt(blockchain.chainId, 16),
            },
          })
          .then((response) => setFiles(response.data))
          .catch((error) => {
            console.log(error);
          });
      } else if (path == "/items" || path == "/") {
        await api
          .get("/ToyoBox/getBoxes", {
            params: {
              walletAddress: blockchain.account,
              chainId: parseInt(blockchain.chainId, 16),
            },
          })
          .then((response) => setFiles(response.data))
          .catch((error) => {
            console.log(error);
          });
      }
    }, 30000);
  });

  function handleClickPanel() {
    const path = window.location.pathname;
    if (path == "/parts") {
      document
        .getElementById("ToyosItemsOpen")
        .classList.replace("active", "remove");

      document
        .getElementById("img-background")
        .classList.remove("animationImgIn");

      document
        .getElementById("img-background")
        .classList.add("animationImgOut");
    } else if (path == "/items") {
      document
        .getElementById("ToyosItemsOpen")
        .classList.replace("active", "remove");

      document
        .getElementById("img-background")
        .classList.remove("animationImgIn");

      document
        .getElementById("img-background")
        .classList.add("animationImgOut");
    }
  }

  return (
    <div className="container remove" id="ToyosItemsOpen">
      <div className="centerToyos">
        <Header />
        <div className="toysContainer">
          {files.map((obj) => (
            <div onClick={() => {
              handleClickPanel();
               dispatch(
                boxClicked({
                  id: obj.tokenId,
                  name: obj.name,
                })
              );
            }}>
              <Toys
                name={obj.name.split(" - ").pop().split("Seed")[0]}
                time={obj.tokenId}
                img={`${window.location.origin}/iconsItems/${obj.name
                  .split(" - ")
                  .pop()
                  .split("Seed")[0]
                  .trim()}.png`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
