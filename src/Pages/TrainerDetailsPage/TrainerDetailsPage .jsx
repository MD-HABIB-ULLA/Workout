import { useNavigate } from "react-router-dom";

const TrainerDetailsPage = () => {
  const navigate = useNavigate();
  const trainer = {
    name: "John Doe",
    photo:
      "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-team-img-1.jpg",
    details:
      "John has over 10 years of experience in personal training and fitness coaching. He specializes in weight loss, muscle gain, and cardiovascular fitness.",
    expertise: ["Weight Loss", "Muscle Gain", "Cardiovascular Fitness"],
  };

  const availableSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "02:00 PM - 03:00 PM",
  ];

  const handleSlotClick = (slot) => {
    // Redirect to the booking page with the selected slot
    history.push(`/booking?slot=${slot}`);
  };

  const handleBecomeTrainerClick = () => {
    // Redirect to the "Become a Trainer" page
    navigate("/become-a-trainer");
  };

  return (
    <div className="trainer-details-page max-w-4xl mx-auto p-6">
      <div className="trainer-info-section mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">{trainer.name}</h2>
        <img
          src={trainer.photo}
          alt={trainer.name}
          className="w-48 h-48 rounded-full mx-auto mb-4"
        />
        <p className="mb-4">{trainer.details}</p>
        <h3 className="text-xl font-semibold mt-4">Expertise:</h3>
        <ul className="list-disc list-inside text-left mx-auto max-w-sm">
          {trainer.expertise.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="available-slots-section mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Available Slots</h2>
        {availableSlots.map((slot, index) => (
          <button
            key={index}
            className="block bg-blue-500 text-white py-2 px-4 rounded mb-2 mx-auto"
            onClick={() => handleSlotClick(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      <div className="become-trainer-section text-center mt-10">
        <button
          className="bg-green-500 text-white py-3 px-6 rounded text-xl"
          onClick={handleBecomeTrainerClick}
        >
          Become a Trainer
        </button>
      </div>
    </div>
  );
};

export default TrainerDetailsPage;
