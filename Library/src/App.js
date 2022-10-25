import React from "react";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import { About } from "./components/About";
import Books from "./components/Book/Books";
import AddBook from "./components/Book/AddBook";
import BookDetail from "./components/Book/BookDetail";
import Chatogaries from "./components/Chatogary/Chatogaries";
import AddChatogary from "./components/Chatogary/AddChatogary";
import ChatogaryDetail from "./components/Chatogary/ChatogaryDetail";
import AddAuthor from "./components/Author/AddAuthor";
import Authors from "./components/Author/Authors";
import AuthorDetail from "./components/Author/AuthorDetail";
import Complains from "./components/Complain/Complains";
import AddComplain from "./components/Complain/AddComplain";
import ComplainDetail from "./components/Complain/ComplainDetail";





function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/add" element={<AddBook/>} exact/>
          <Route path="/books" element={<Books/>} exact/>
          <Route path="/books/:id" element={<BookDetail/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/chatogary" element={<Chatogaries/>} exact/>
          <Route path="/addchatogary" element={<AddChatogary/>} exact/>
          <Route path="/chatogary/:id" element={<ChatogaryDetail/>} exact/>
          <Route path="/author" element={<Authors/>} exact/>
          <Route path="/addauthor" element={<AddAuthor/>} exact/>
          <Route path="/author/:id" element={<AuthorDetail/>} exact/>
          <Route path="/complain" element={<Complains/>} exact/>
          <Route path="/addcomplain" element={<AddComplain/>} exact/>
          <Route path="/complain/:id" element={<ComplainDetail/>} exact/>
                    
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
