import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import unicornbikeImg from "./../assets/images/unicorncoin.jpg";
import { Link } from "react-router-dom";
import auth from "../auth/auth-helper";
import ExpenseOverview from "./../expense/ExpenseOverview";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#DBFEB8",
    height: "101vh",
    color: "#4A314D"
  }
  ,
  head: {
    marginTop:"40px",
    textTransform: "uppercase",
    backgroundImage: "linear-gradient(-225deg,#231557 0%,#44107a 29%,#ff1361 67%,#fff800 100%)",
    backgroundSize: "auto auto",
    backgroundClip: "border-box",
    backgroundSize: "200% auto",
    color: "#fff",
    backgroundClip: "text",
    textFillColor: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "textclip 2s linear infinite",
    display: "inline-block",
    fontSize: "40px", 
    
  },
  para:{
    fontSize: "20px",
  },
  paradiv:{
    borderRadius: "25px",
    border:"1px solid #9ecaed",    
    margin: "30px",
    padding: "20px",
    backgroundColor: "#9ecaed",
    boxShadow: "0 0 10px #9ecaed"
  },
  footer:{
    textAlign:"center",
    marginTop: "auto",
    padding: "30px",
    fontSize: "30px",
    color:"#4A314D",
    backgroundColor:"#61C0A9",
    width: "94.3vw"
  },
  card: {
    maxWidth: 800,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  link:{
    color:"#F2E9E4"
  },
  title: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 440,
  },
  credit: {
    padding: 10,
    textAlign: "right",
    backgroundColor: "#ededed",
    borderBottom: "1px solid #d0d0d0",
    "& a": {
      color: "#4f83cc",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      {auth.isAuthenticated() && <ExpenseOverview />}
      {!auth.isAuthenticated() && typeof window !== "undefined" && (
        <div className={classes.home}>
          <h1 className={classes.head}>
            Home Page
          </h1>
          {/* <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle"/> */}
          <div className={classes.paradiv}>
            <p className={classes.para}>
              Personal finance management is an important part of people’s lives.
              However, everyone does not have the knowledge or time to manage
              their finances in a proper manner. And, even if a person has time
              and knowledge, they do not bother with tracking their expenses as
              they find it tedious and time-consuming. Now, you don’t have to
              worry about managing your expenses, as you can get access to an
              expense tracker that will help in the active management of your
              finances.
            </p>
            <ol>
              <li><h3>You have no control over your money:</h3>{"\n"}<p>If you don’t check your spending and create a budget, you will have no control whatsoever on your money. Instead, money will control you, and you will either have perpetual lack of funds or you will end up steeped in debt. A money manager app helps you decide between short-term and long-term spending.</p></li>
              <li><h3>You have no financial goals:</h3>{"\n"}<p>If you are spending money frivolously, you will not have money to set financial goals. However, when you have a daily expense manager, you will be able to work with limited resources and use your money in a wise manner so that you can create financial goals and ensure you meet them.</p></li>
              <li><h3>You are unaware what is happening with your money:</h3>{"\n"}<p>If you are clueless about how much is your inflow and how much you are spending, you will not know at the end of the month what happened to your money. An expense tracker helps you figure out what is happening to your money, and whether you can afford something you want.</p></li>
            </ol>
          </div>
          <div className={classes.footer}>
            <div>
              Welcome to the Keep Track.{" "}
              <Link className={classes.link} to="/signup">Sign up</Link> or{" "}
              <Link className={classes.link} to="/signin">Sign in</Link> to get started.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
