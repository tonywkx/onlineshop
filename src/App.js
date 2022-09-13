import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Items from './components/items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'sofas',
          price: '389.00'
        },
        {
          id: 4,
          title: 'Стул красный',
          img: 'red-chair.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '139.00'
        },
        {
          id: 5,
          title: 'Тумбочка',
          img: 'thomb.webp',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'other',
          price: '79.99'
        },
        {
          id: 6,
          title: 'Стол стеклянный',
          img: 'glass-table.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'tables',
          price: '249.99'
        },
        {
          id: 7,
          title: 'Диван дерево',
          img: 'wood-sofa.png',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'sofas',
          price: '349.99'
        },
        {
          id: 8,
          title: 'Диван огромный',
          img: 'huge-sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'sofas',
          price: '549.99'
        },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories filterCategory={this.filterCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item});
    this.setState({showFullItem: !this.state.showFullItem})
  }

  filterCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category )
    })
  }
  
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if(!isInArray) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App;
