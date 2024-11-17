import React from "react";
import TrackingTimeline from "../components/Elements/TrackingTimeline";

const TrackingTimelinePage: React.FC = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-full min-w-full shadow-md rounded-sm">
            <h1 className="text-2xl font-semibold text-center mb-8">Tracking Timeline Status</h1>
            <TrackingTimeline />
        </div>
    )
}

export default TrackingTimelinePage;