import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/style/App.scss';
import UseInitialState from '../hooks/UseInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = UseInitialState(API);
  console.log(initialState);
  return (
    <div className='App'>
      <Header />
      <Search />

      {
        initialState.mylist.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} { ...item } />)}
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} { ...item } />)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
