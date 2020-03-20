import React, { Component } from "react";
import MarketAnalyticsNavbar from "components/Navbars/MarketAnalyticsNavbar";
import { Row, Col, Button } from "reactstrap";
import Select from "react-select";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <MarketAnalyticsNavbar {...this.props}>
        <div className="filter-container" style={{ margin: "20px" }}>
          <h3 style={{ color: "black", display: "inline" }}>Bộ lọc</h3>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={this.toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>

          <Row>
            <Col lg="6" md="6" sm="12">
              <Select
                className="react-select primary"
                classNamePrefix="react-select"
                name="singleSelect"
                value={this.state.singleSelect}
                onChange={value => this.setState({ singleSelect: value })}
                options={[
                  {
                    value: "",
                    label: "Single Option",
                    isDisabled: true
                  },
                  { value: "2", label: "Foobar" },
                  { value: "3", label: "Is great" }
                ]}
                placeholder="Single Select"
              />
            </Col>
            <Col lg="6" md="6" sm="12">
              <Select
                className="react-select info"
                classNamePrefix="react-select"
                placeholder="Choose City"
                name="multipleSelect"
                closeMenuOnSelect={false}
                isMulti
                value={this.state.multipleSelect}
                onChange={value => this.setState({ multipleSelect: value })}
                options={[
                  {
                    value: "",
                    label: " Multiple Options",
                    isDisabled: true
                  },
                  { value: "2", label: "Paris " },
                  { value: "3", label: "Bucharest" },
                  { value: "4", label: "Rome" },
                  { value: "5", label: "New York" },
                  { value: "6", label: "Miami " },
                  { value: "7", label: "Piatra Neamt" },
                  { value: "8", label: "Paris " },
                  { value: "9", label: "Bucharest" },
                  { value: "10", label: "Rome" },
                  { value: "11", label: "New York" },
                  { value: "12", label: "Miami " },
                  { value: "13", label: "Piatra Neamt" },
                  { value: "14", label: "Paris " },
                  { value: "15", label: "Bucharest" },
                  { value: "16", label: "Rome" },
                  { value: "17", label: "New York" },
                  { value: "18", label: "Miami " },
                  { value: "19", label: "Piatra Neamt" }
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" sm="12" className="text-center">
              <Button color="success">Success</Button>
            </Col>
          </Row>
        </div>
      </MarketAnalyticsNavbar>
    );
  }
}

export default Navbar;
