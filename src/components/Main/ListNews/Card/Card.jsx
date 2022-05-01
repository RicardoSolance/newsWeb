import React, { Component } from "react";
import { Chip,Stack,Button,Box,Typography} from '@mui/material';
import { width } from "@mui/system";

class Card extends Component {
  render() {
    // console.log('Este es el sixnews', this.props.value);
    console.log('Este es el sixnews', this.props.value);
    const {title,info,source,url,author}=this.props.value;
    return (
      <article className="article" >

      <Typography className="title" variant="h4" >{title}</Typography>
      
        <Stack>
        <Typography variant="h6">Author: {author}</Typography>
        <Chip  label={ source} variant="outlined" >Fuente : </Chip>
        <Button href={url} color="success">See more</Button>
        </Stack>
        
      </article>);
  }
}

export default Card;
