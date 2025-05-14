import ProductCard from '../../components/ProductCard';

const products = [
  {
     id: '1',
    image: 'https://static.pullandbear.net/assets/public/f960/2ef1/25bd4bc996c6/b6494a89cda8/03248588527-A6M/03248588527-A6M.jpg?ts=1746570068712&w=836&f=auto',
    name: 'Green T-Shirt',
    description: 'Man cotton T-shirt',
    price: 19.99,
  },

  {
     id: '2',
    image: 'https://static.pullandbear.net/assets/public/595b/75ae/79a54f24b4da/6c5836643c19/07591906605-a6m/07591906605-a6m.jpg?ts=1736935750440&w=836&f=auto',
    name: 'Red Hoodie',
    description: 'Man Hoodie',
    price: 39.99,
  },

  {
     id: '3',
    image: 'https://static.bershka.net/assets/public/5632/e3c8/ad8a4bcca238/273c05e34587/02924492802-a4o/02924492802-a4o.jpg?ts=1743508889078&w=1920',
    name: 'oversize T-shirt',
    description: 'Printed short sleeve oversize T-shirt',
    price: 49.99,
  },

  { 
    id: '4',
    image: 'https://static.bershka.net/assets/public/11fd/44fb/4a2a445c9659/027bde8232e1/05593187610-a4o/05593187610-a4o.jpg?ts=1746610399848&w=1920',
    name: 'Summer Dress',
    description: 'Floral lightweight dress',
    price: 29.99,
  },

  {
     id: '5',
    image: 'https://static.bershka.net/assets/public/55b0/27ad/10b544ed8552/b33d352d210e/00587173600-a4o/00587173600-a4o.jpg?ts=1742383400368&w=1920',
    name: 'Halter mini dress',
    description: 'Made with recycled materials',
    price: 34.99,
  },

  {
     id: '6',
    image: 'https://static.bershka.net/assets/public/efed/26a5/d75a4c7e9f5f/749b71987b29/01163494712-a4o/01163494712-a4o.jpg?ts=1746445457211&w=800',
    name: 'short sleeve shirt ',
    description: 'Gathered short sleeve shirt with tie detail',
    price: 59.99,
  },

  {
     id: '7',
    image: 'https://static.bershka.net/assets/public/169a/6380/19d84a8b8082/46201f4b64fc/07118777700-a4o/07118777700-a4o.jpg?ts=1732182765699&w=800',
    name: 'High neck sweater',
    description: 'Women Sweater',
    price: 24.99,
  },

  {
     id: '8',
    image: 'https://static.bershka.net/assets/public/501e/c1e7/08d5433e8422/01387e6e21df/07262686711-a4o/07262686711-a4o.jpg?ts=1739537441863&w=1920',
    name: 'Cropped V-neck sweater',
    description: 'Casual women sweater',
    price: 27.99,
  },

  {
     id: '9',
    image: 'https://static.bershka.net/assets/public/fd58/463a/26fd4afb8182/dace108b37d1/02778623800-a4o/02778623800-a4o.jpg?ts=1740133956418&w=1920',
    name: 'Textured short sleeve polo shirt',
    description: '100% made of cotton',
    price: 44.99,
  },
];

const ProductList = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
  {products.map((product) => (
  <ProductCard key={product.id} {...product} />
))}
</div>
  );
};

export default ProductList;
