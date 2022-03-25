import styles from "./searchModule.module.css";

export default function SearchModule(props) {
  return (
    <div className={styles.searchModuleContainer}>
      <div className={styles.searchModuleInnerContainer}>
        <div className={styles.searchModuleStack}>
          <input
            type="text"
            name="search usernames"
            placeholder="Search & add a Person..."
          />
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
                  fill="grey"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
