import { Card } from "@tremor/react";

const WarningCard = ({ alert, index }: any) => {
  const AlertIcon = alert.icon;
            console.log()
  return (
    <Card
      key={index}
      className={`border border-2 rounded-xl ${alert.borderColor} ${alert.bgColor} p-4 flex items-center space-x-3 `}
    >
      {AlertIcon}
      <div>
        <p className={`text-xs font-semibold ${alert.textColor}`}>
          {alert.message}
        </p>
        {alert.subMessage && (
          <p className={`text-xs ${alert.textColor}`}>{alert.subMessage}</p>
        )}
      </div>
    </Card>
  );
};

export default WarningCard;
