
const PlansTrainer = () => {

    return (
        <>
            <section className="plan-section">
                <div className="plan container">
                    <div className="plan__title">
                        <h3>Plan your trainer now</h3>
                        <h2>Quick & easy workout schedule</h2>
                    </div>

                    <div className="plan__boxes">
                        <div className="plan__boxes__box">
                            <i className="fab fa-wolf-pack-battalion"></i>
                            <h3>Select Trainer</h3>
                            <p>
                                We offers a big range of equipments for all your
                                workout needs. We have the perfect trainer to
                                meet your needs
                            </p>
                        </div>

                        <div className="plan__boxes__box">
                            <i className="fas fa-phone-volume"></i>
                            <h3>Contact Operator</h3>
                            <p>
                                Our knowledgeable and friendly operators are
                                always ready to help with any questions or
                                concerns
                            </p>
                        </div>

                        <div className="plan__boxes__box">
                            <i className="fas fa-dumbbell"></i>
                            <h3>Let's Press</h3>
                            <p>
                                Whether you're hitting the gym, we've got you
                                covered with our wide range of dumbbell
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlansTrainer;
