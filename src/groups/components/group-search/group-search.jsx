/* eslint-disable no-use-before-define */
import { useState } from "react";
import { GridContainer, GridItem } from "../../../shared/components/grid";
import { SearchButton } from "../../../shared/components/button";
import { AutoCompleteTextField } from "../../../shared/components/auto-complete-text-field";
import { Debounce, Throttle } from "../../../shared/services/utility";
import { getAutoCompleteSuggestions } from "../../services/api";
import { connect } from "react-redux";
import { updateLoader } from "../../../shared/shared-action";
import { addGroupList } from "../../group-action";
const GroupSearch = (props) => {
  const { toggleLoader, addNewGroupList } = props;
  const [text, setText] = useState("");
  const [options, setOptions] = useState([]);

  const handleChange = Debounce(async (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
    toggleLoader(true);
    const response = await getAutoCompleteSuggestions(value, 7);
    setOptions(response);
    toggleLoader(false);
  }, 400);

  const handleSearch = Throttle(() => {
    addNewGroupList(text);
    setOptions([]);
  }, 500);

  return (
    <GridContainer>
      <GridItem sm={4} xs={12}>
        <AutoCompleteTextField
          id={"groupSearch"}
          label={"Search"}
          value={text}
          options={options}
          onChange={handleChange}
          onClick={handleSearch}
        />
      </GridItem>
      <GridItem sm={2} xs={12} align="center">
        <SearchButton id="Search" value={"Search"} onClick={handleSearch} />
      </GridItem>
    </GridContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoader: (payload) => dispatch(updateLoader(payload)),
    addNewGroupList: (payload) => dispatch(addGroupList(payload)),
  };
};

export default connect(null, mapDispatchToProps)(GroupSearch);
