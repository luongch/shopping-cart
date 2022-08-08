function Item(props) {
  let {title, price, src, alt} = props
  return (
    <div className="item">
      <div>
        <img src={src} alt={alt} width="300px"/>
      </div>
      <div>
        <div>{title}</div>
      </div>
      <div>
        <div>${price}</div>
      </div>
    </div>
  );
}

export default Item;
