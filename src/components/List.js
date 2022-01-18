import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Légume", "Fruits", "Viande"],
      name: "Liste de course",
    };
  }

  handleClick(event) {
    this.setState((oldState) => {
      return {
        list: [...oldState.list, "AH", "OH"],
      };
    });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <div>{this.state.name}</div>
        <ul>
          {this.state.list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <button onClick={this.handleClick.bind(this)}>Update</button>

        <form>
          <input type="number" />
          <input type="text" />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default List;
