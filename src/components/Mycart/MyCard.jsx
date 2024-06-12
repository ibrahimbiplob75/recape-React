

const MyCard = ({phone}) => {
    const {image, phone_name, brand_name, price}=phone || {}
    return (
      <div>
        <div className="card bg-base-100 shadow-xl h-5/6">
          <figure className="">
            <img className="" src={image} alt={phone_name} />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title mt-2">
              {phone_name}
              <div className="badge badge-secondary">{price * 100}TK</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{brand_name}</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <div className="rating rating-md mt-2">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="card-actions justify-end mt-2">
              <button className="btn btn-outline">Delete !</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyCard;