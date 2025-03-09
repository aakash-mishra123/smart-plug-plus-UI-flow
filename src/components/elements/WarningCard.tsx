import { AlertDataType } from "@/utils/types";
import { Card } from "@tremor/react/dist";

 type WarningCardProps  = {
  alert: AlertDataType,
  index: number,
  key: number
}

const WarningCard = ({ alert, index }: WarningCardProps) => {
  
  return (
    <Card
      key={index}
      className={`border border-2 rounded-xl ${alert.borderColor} ${alert.bgColor} p-4 flex items-center space-x-3 `}
    >
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
