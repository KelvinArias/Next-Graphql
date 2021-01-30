import style from "../scss/card.module.scss"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "next/image"

const Card = props => {
    const { businesses } = props.data;
    console.log(props)
    return (
        <div className="container mt-5">
            <div className="row">
                {businesses.map(business => (
                    <div className="col-xs-6 col-sm-4 col-md-3 p-3" key={business.id}>
                        <div className={style.card}>
                            <div className={style.header}>
                                <Image
                                    src={business.image_url}
                                    alt="Picture of the local"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="card-body p-3">
                                <h3 className="m-0">{business.name}</h3>
                                <div>
                                    <div className="d-flex mt-2">
                                        <div className="p-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={style.svg}>
                                                <path d="M11 22a3 3 0 01-2.12-.88l-8-8a3 3 0 010-4.24l8-8a3 3 0 014.24 0l8 8a3 3 0 010 4.24l-8 8A3 3 0 0111 22zm0-20a1 1 0 00-.71.29l-8 8a1 1 0 000 1.42l8 8a1 1 0 001.42 0l8-8a1 1 0 000-1.42l-8-8A1 1 0 0011 2zm4.85 8.15a.48.48 0 010 .66l-3 3a.47.47 0 01-.35.15.43.43 0 01-.19 0 .5.5 0 01-.31-.46v-2.05a1 1 0 01-.25.05h-2a1 1 0 00-1 1v1a1 1 0 11-2 0v-1a3 3 0 013-3h2a1 1 0 01.25.05V7.5a.5.5 0 01.31-.5.47.47 0 01.54.15l3 3z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="p-1">
                                            <p className={`${style.size} ${style.address} m-0`}>{business.location.display_address.join(", ")}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        {business.phone && (
                                            <div className="d-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={style.svg}>
                                                    <path d="M13.59 23.07A7 7 0 018.64 21L3 15.36a7 7 0 010-9.9l1.39-1.41a1 1 0 011.42 0l5 5a1 1 0 010 1.41 2.001 2.001 0 002.83 2.83 1 1 0 011.41 0l4.95 5a1 1 0 010 1.42L18.54 21a7 7 0 01-4.95 2.07zM5.1 6.17l-.71.71a5 5 0 000 7.07l5.66 5.66a5 5 0 007.07 0l.71-.71-3.63-3.63a4 4 0 01-4.86-.61 4 4 0 01-.61-4.86L5.1 6.17zm12.78 5.95a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 6 6 0 016 6 1 1 0 01-1 1zm4.19 0a1 1 0 01-1-1 8.19 8.19 0 00-8.19-8.19 1 1 0 010-2c5.625.006 10.184 4.565 10.19 10.19a1 1 0 01-1 1z">
                                                    </path>
                                                </svg>
                                                <p className={`${style.size} p-1 m-0`}>{business.display_phone}</p>
                                            </div>
                                        )}
                                        <div className="p-1">
                                            <p className={`${style.size} m-0`}>{business.review_count > 1 ? `${business.review_count} reviews` : `${business.review_count} review` }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    data: state.home
});
  
export default connect(mapStateToProps, {  })(Card);