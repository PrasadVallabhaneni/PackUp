import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
// import _ from 'lodash';

const useStyles = makeStyles({
  root: {
    //  marginTop:'20%' ,
    //  marginLeft:'-50%',
     padding:'10px',
    width: 350,
    textAlign:'center',
    color:'black',
    background:'white'
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({range}) {
  const classes = useStyles();
  const [value, setValue] = React.useState([1000, 50000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //   let delayedQuery = _.debounce((q) => range(q), 1000);
    //   delayedQuery(newValue)
    range(newValue)
    
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        value={value}
        min={1000}
        max={50000}
        step={100}
        mark={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
