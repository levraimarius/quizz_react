import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

import "./Form.css";

class Form extends React.Component {
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
        <FormControl>
          <InputLabel htmlFor="my-input">Quel est votre question ?</InputLabel>
          <Input
            sx={{
              "& > :not(style)": { width: "40ch" },
            }}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "15ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Réponse 1" variant="standard" />
          <TextField id="standard-basic" label="Réponse 2" variant="standard" />
          <TextField id="standard-basic" label="Réponse 3" variant="standard" />
          <TextField id="standard-basic" label="Réponse 4" variant="standard" />
        </Box>

        <FormControl sx={{ m: 3, minWidth: 300 }}>
          <InputLabel id="bonne-reponse">
            Quel est la bonne réponse ?
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="bonne-reponse"
            label="Quel est la bonne réponse ?"
          >
            <MenuItem value="">Réponse 1</MenuItem>
            <MenuItem value="">Réponse 2</MenuItem>
            <MenuItem value="">Réponse 3</MenuItem>
            <MenuItem value="">Réponse 4</MenuItem>
          </Select>
        </FormControl>

        <Button className="button" variant="contained">
          Ajouter une question
        </Button>
      </>
    );
  }
}

export default Form;
