import React from 'react';
import {makeStyles} from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    card: {
        backgroundColor: 'var(--background-card)',
        border: 'var(--toll-bar-border)',
        boxShadow: '0px 0px 8px 0px rgb(0 0 0 / 55%)',
        color: 'var(--text-background-color)',
        padding: '2rem 3rem 3rem',
        borderRadius: '6px',
        width: '100%',
    },
}));

const CardAll = ({children}) => {
    const { classes } = useStyles();
    return (
        <div className={classes.card}>
            {children}
        </div>
    );
};

export default CardAll;