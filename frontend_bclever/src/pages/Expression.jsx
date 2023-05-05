

const Expression = () => {
  
  // componentDidUpdate(prevProps) {
  //   console.log(prevProps)
  //   const node = ReactDOM.findDOMNode(this.ref);
  //   if(this.props.transitioning) {
  //     node.classList.add('ease-in duration-300 ...');
  //   }
  //   else {
  //     node.classList.remove('ease-in duration-300 ...');
  //   }
  // }
  
    const {from, to} = this.props;
    return (
      <div className="transition duration-150 ease-out md:ease-in flex h-32 justify-center" ref={ref => this.ref = ref}>
        <div className="h-24 w-36 transition duration-150 ease-out md:ease-in flex justify-items-center">
          <div className="text-2xl hover:shadow-inner transform hover:scale-125 hover:bg:opacity-50 transition ease-out duration-300">{from}</div>
          <div className="text-2xl border-dark  border-3 border-dashed w-24 h-24 btn">?</div>
        </div>
        <div className="transition duration-150 ease-out md:ease-in flex h-24 w-36 justify-center">
          <div className="text-2xl hover:shadow-inner transform hover:scale-125 hover:bg:opacity-50 transition ease-out duration-300">{to}</div>
          <div className="text-2xl border-dark border-3 border-dashed w-24 h-24 btn">?</div>
        </div>
      </div>
    );
  
}

export default Expression