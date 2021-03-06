import { useEffect, useState } from "react";
import styles from "./searchModule.module.css";
import { SearchContact } from "../../FirebaseModules/SearchContact";
import { AddContact } from "../../FirebaseModules/AddContact";
import { useLoading } from "../../context/loadingContext/loadingContext";
import { useAuth } from "../../context/authContext/authContext";
import Avatar from "./assets/avatar.png";
import Image from "next/Image";

export default function SearchModule(props) {
  const { user } = useAuth();
  const { setLoading } = useLoading();
  const [searchInputField, setSearchInputField] = useState();
  const [searchResult, setSearchResult] = useState(null);
  const [userAddCheck, setUserAddCheck] = useState(null);

  useEffect(() => {
    let check = null;
    if (searchResult) {
      props.contactList.forEach((element) => {
        if (searchResult.userName == element.name) {
          check = false;
          return false;
        } else {
          check = true;
        }
      });
      if (!check) {
        props.setSearchValidation({
          status: "error",
          msg: "User Already Exists in your contact list!",
        });
      }
      setUserAddCheck(check);
    }
  }, [searchResult]);

  async function handleSearch(e) {
    props.setSearchValidation(null); //error validation msg root component MainApp
    setSearchResult(null);
    e.preventDefault();
    setLoading(true);
    setSearchResult(await SearchContact(searchInputField, setLoading));
    console.log(searchResult);
  }
  async function handleSearchByKeyPress(e) {
    if (event.keyCode == 13) {
      handleSearch(e);
    }
  }
  function handleUserAddition() {
    props.setSearchValidation(null);
    AddContact(
      user.displayName,
      searchResult.userName,
      setLoading,
      props.setSearchValidation
    );
    props.setSearchValidation({
      status: "sucess",
      msg: "Succesfully added user to your contact list! Now you can chat with them securely.",
    });
  }

  return (
    <div className={styles.searchModuleContainer}>
      <div className={styles.searchModuleInnerContainer}>
        <div className={styles.searchHeader}>
          <div className={styles.searchHeaderStack}>
            <h3>Search & Add Users</h3>
            <div className={styles.closeSearch}>
              <a onClick={() => props.setSearch(false)}>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 0.375C7.81914 0.375 0.375 7.81914 0.375 17C0.375 26.1809 7.81914 33.625 17 33.625C26.1809 33.625 33.625 26.1809 33.625 17C33.625 7.81914 26.1809 0.375 17 0.375ZM23.1379 23.316L20.6887 23.3049L17 18.9074L13.315 23.3012L10.8621 23.3123C10.6988 23.3123 10.5652 23.1824 10.5652 23.0154C10.5652 22.9449 10.5912 22.8781 10.6357 22.8225L15.4637 17.0705L10.6357 11.3223C10.5909 11.2679 10.566 11.1998 10.5652 11.1293C10.5652 10.966 10.6988 10.8324 10.8621 10.8324L13.315 10.8436L17 15.241L20.685 10.8473L23.1342 10.8361C23.2975 10.8361 23.4311 10.966 23.4311 11.133C23.4311 11.2035 23.4051 11.2703 23.3605 11.326L18.54 17.0742L23.3643 22.8262C23.4088 22.8818 23.4348 22.9486 23.4348 23.0191C23.4348 23.1824 23.3012 23.316 23.1379 23.316Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.searchModuleStack}>
          <input
            type="text"
            name="search usernames"
            placeholder="Search & add a Person..."
            onKeyDown={handleSearchByKeyPress}
            onChange={(e) => {
              setSearchInputField(e.target.value);
            }}
          />
          <button className={styles.searchBtn} onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className={styles.searchResultsContainer}>
          {searchResult && searchResult != null ? (
            searchResult == "Not Found" ? (
              <div className={styles.noResultFound}>
                No user found, Please check spellings & try again!!
              </div>
            ) : (
              <div className={styles.searchResultStack}>
                <div className={styles.searchedUser}>
                  <div className={styles.contentStack}>
                    <div className={styles.avatarImage}>
                      <Image src={Avatar} />
                    </div>
                    <div className={styles.userContent}>
                      <h4>{searchResult.name}</h4>
                      <h5>@{searchResult.userName}</h5>
                    </div>
                  </div>
                  {user.displayName != searchResult.userName &&
                  userAddCheck &&
                  userAddCheck != null ? (
                    <div
                      className={styles.addUserIcon}
                      onClick={handleUserAddition}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 112 112"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M74.1891 70.2625C76.8359 68.8406 79.8656 68.0312 83.0922 68.0312H83.1031C83.4312 68.0312 83.5844 67.6375 83.3437 67.4188C79.9883 64.4074 76.1552 61.9753 72.0016 60.2219C71.9578 60.2 71.9141 60.1891 71.8703 60.1672C78.6625 55.2344 83.0812 47.2172 83.0812 38.1719C83.0812 23.1875 70.9625 11.0469 56.0109 11.0469C41.0594 11.0469 28.9516 23.1875 28.9516 38.1719C28.9516 47.2172 33.3703 55.2344 40.1734 60.1672C40.1297 60.1891 40.0859 60.2 40.0422 60.2219C35.1531 62.2891 30.7672 65.2531 26.9937 69.0375C23.2421 72.7823 20.2553 77.2217 18.2 82.1078C16.1778 86.8926 15.0864 92.019 14.9844 97.2125C14.9815 97.3292 15.0019 97.4454 15.0446 97.5541C15.0873 97.6628 15.1512 97.7618 15.2328 97.8454C15.3143 97.929 15.4118 97.9954 15.5194 98.0407C15.627 98.0861 15.7426 98.1094 15.8594 98.1094H22.4109C22.8812 98.1094 23.275 97.7266 23.2859 97.2563C23.5047 88.8125 26.8844 80.9047 32.8672 74.9109C39.0469 68.7094 47.2719 65.2969 56.0219 65.2969C62.2234 65.2969 68.1734 67.0141 73.3031 70.2297C73.4349 70.3125 73.5862 70.3591 73.7417 70.3649C73.8972 70.3706 74.0515 70.3353 74.1891 70.2625V70.2625ZM56.0219 56.9844C51.0125 56.9844 46.2984 55.0266 42.7437 51.4719C40.9948 49.7274 39.6083 47.6542 38.6641 45.3716C37.7198 43.089 37.2366 40.6421 37.2422 38.1719C37.2422 33.1516 39.2 28.4266 42.7437 24.8719C46.2875 21.3172 51.0016 19.3594 56.0219 19.3594C61.0422 19.3594 65.7453 21.3172 69.3 24.8719C71.049 26.6163 72.4355 28.6895 73.3797 30.9722C74.3239 33.2548 74.8071 35.7017 74.8016 38.1719C74.8016 43.1922 72.8437 47.9172 69.3 51.4719C65.7453 55.0266 61.0313 56.9844 56.0219 56.9844ZM96.25 83.0156H87.0625V73.8281C87.0625 73.3469 86.6687 72.9531 86.1875 72.9531H80.0625C79.5812 72.9531 79.1875 73.3469 79.1875 73.8281V83.0156H70C69.5187 83.0156 69.125 83.4094 69.125 83.8906V90.0156C69.125 90.4969 69.5187 90.8906 70 90.8906H79.1875V100.078C79.1875 100.559 79.5812 100.953 80.0625 100.953H86.1875C86.6687 100.953 87.0625 100.559 87.0625 100.078V90.8906H96.25C96.7312 90.8906 97.125 90.4969 97.125 90.0156V83.8906C97.125 83.4094 96.7312 83.0156 96.25 83.0156Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
