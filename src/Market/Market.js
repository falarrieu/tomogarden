import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, FormControl, Select, MenuItem } from '@material-ui/core';
import { SortByAlpha, MonetizationOn, DoneAll} from '@material-ui/icons';
import { Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import useData from './useData';
import ChartModal from './Chart';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  subheaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  productDescription: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
   productName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  chart: {
    margin: 'auto',
    zIndex: 500,
  }
}));




function Market() {
    const dataContext = useData();
    const classes = useStyles();

    const [chartOpen, setChartOpen] = useState(false);

    const handleChartOpen = () => {
        setChartOpen(true);
    }

    const handleChartClose = () => {
        setChartOpen(false);
    }

    return (
        <div>
            <List
                subheader={
                    <div className={classes.subheaderContainer} >
                        <FormControl className={classes.formControl}>
                            <TextField
                            label="Search products"
                            value={dataContext.searchTerm}
                            onChange={dataContext.handleSearchChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <SortByAlpha />
                                </InputAdornment>
                                ),
                            }}
                            />
                        </FormControl>
                        <ListSubheader>
                            <IconButton onClick={() => dataContext.handleSortChange("price")}>
                                <MonetizationOn/> 
                            </IconButton>
                            Price
                        </ListSubheader>
                        <ListSubheader>
                            <IconButton onClick={() => dataContext.handleSortChange("availibility")}>
                                <DoneAll />
                            </IconButton>
                            Availability
                        </ListSubheader>
                    </div>
                    
                }
            >
                {dataContext.filteredProducts.map((product) => (
                    <ListItemButton key={product.id} className={classes.productDescription} onClick={handleChartOpen}>
                        <ListItem className={classes.productDescription}>
                            <div className={classes.productName}>
                                <ListItemIcon>
                                    <GrassIcon/>
                                </ListItemIcon>
                                <ListItemText 
                                    primary={product.name}
                                    secondary={product.date_posted}
                                />
                            </div>
                            <Typography>
                                ${product.price}
                            </Typography>
                            <Typography>
                                {product.available ? "Yes" : "No"}
                            </Typography>
                        </ListItem>
                    </ListItemButton>
                ))}
            </List>
            <ChartModal open={chartOpen} handleChartClose={handleChartClose}/>
        </div>
    );
}

export default Market;