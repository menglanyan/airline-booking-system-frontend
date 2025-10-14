import { useNavigate, Link } from "react-router-dom";
import { useMessage } from "../common/MessageDisplay";
import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";

const PilotDashboardPage = () => {

  const { ErrorDisplay, SuccessDisplay, showError } = useMessage();
  const [activeTab, setActiveTab] = useState("all-pilots");
  const [pilots, setPilots] = useState([]);
  const [myFlights, setMyFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const pilotsRes = await ApiService.getAllPilots();
      const myFlightsRes = await ApiService.getMyFlights();
      setPilots(pilotsRes.data || []);
      setMyFlights(myFlightsRes.data || []);
    } catch (error) {
      showError(error.response?.data?.message || "Failed to fetch all pilots");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateTime) => {
    return new Date(dateTime).toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  if (loading) return <div className="admin-loading">Loading Dashboard...</div>;

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-card">
        <ErrorDisplay />
        <SuccessDisplay />

        <h2 className="admin-dashboard-title">Pilot Dashboard</h2>

        <div className="admin-dashboard-tabs">
          <button
            className={activeTab === "all-pilots" ? "active" : ""}
            onClick={() => setActiveTab("all-pilots")}
          >
            Pilots
          </button>
          <button
            className={activeTab === "my-flights" ? "active" : ""}
            onClick={() => setActiveTab("my-flights")}
          >
            My Flights
          </button>
        </div>

        <div className="admin-dashboard-content">
          {activeTab === "all-pilots" ? (
            <div className="admin-bookings-list">
              <h3>All Pilots</h3>
              {pilots.length > 0 ? (
                pilots.map(pilot => (
                  <div className="info-card">
                    <h3>Pilot Information</h3>
                    <div className="info-row">
                      <span className="label">Name:</span>
                      <span className="value">{pilot.name}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Email:</span>
                      <span className="value">{pilot.email}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Phone:</span>
                      <span className="value">{pilot.phoneNumber}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Account Status:</span>
                      <span className="value">
                        {pilot.active ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="admin-no-data">
                  <p>No Pilot found</p>
                </div>
              )}
            </div>
          ) : (
            <div className="admin-flights-list">
              <h3>My Flights</h3>
              {myFlights.length > 0 ? (
                myFlights.map(myFlight => (
                  <div key={myFlight.id} className="admin-flight-card">
                    <div className="admin-flight-header">
                      <div className="admin-flight-number">
                        {myFlight.flightNumber}
                      </div>
                      <div className={`admin-flight-status ${myFlight.status.toLowerCase()}`}>
                        {myFlight.status}
                      </div>
                    </div>

                    <div className="admin-flight-details">
                      <div className="admin-route">
                        <span className="admin-departure">
                          {myFlight.departureAirport?.iataCode} ({myFlight.departureAirport?.city})
                        </span>
                        <span>→</span>
                        <span className="admin-arrival">
                          {myFlight.arrivalAirport?.iataCode} ({myFlight.arrivalAirport?.city})
                        </span>
                      </div>

                      <div className="admin-times">
                        <div className="admin-departure-time">
                          {formatDate(myFlight.departureTime)}
                        </div>
                        <div className="admin-arrival-time">
                          {formatDate(myFlight.arrivalTime)}
                        </div>
                      </div>

                      <div className="admin-flight-actions">
                        <Link
                          to={`/admin/flight/${myFlight.id}`}
                          className="admin-manage-flight"
                        >
                          Manage Flight
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="admin-no-data">
                  <p>No flights found</p>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default PilotDashboardPage;