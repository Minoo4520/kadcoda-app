function NeshanMap() {
  return (
    <div className="py-3 sm:p-6">
      <div className="mt-3">
        <div className="map-container overflow-hidden rounded-xl">
          <iframe
            title="map-iframe"
            src="https://neshan.org/maps/iframe/places/66498425db97389e722f7be4ef6a2ad1#c36.326-50.042-19z-0p/36.326332699999995/50.0419905"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default NeshanMap;
