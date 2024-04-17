import { Badge, BadgeDelta } from "@tremor/react";

export function BadgesStatus({ status }) {
  const DeltaBadges = [
    {
      deltaType: "increase",
      status: "Approved",
    },
    {
      deltaType: "unchanged",
      status: "Finished",
    },
    {
      deltaType: "decrease",
      status: "Denied",
    },
  ];

  const inProgress = status === "In progress";
  const matchedDelta = DeltaBadges.find(item => item.status === status);
  return (
    <div>
      {inProgress && <Badge>{status}</Badge>}

      {!inProgress && matchedDelta && (
        <BadgeDelta deltaType={matchedDelta.deltaType}>{matchedDelta.status}</BadgeDelta>
      )}
    </div>
  );
}
