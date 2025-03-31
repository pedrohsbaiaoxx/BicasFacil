import { Activity, ShieldAlert, Siren } from "lucide-react";

const EmergencyContacts = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 font-sans text-center">Contatos de Emergência</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex items-center">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3">
              <Siren className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium text-red-800">Bombeiros</h3>
              <p className="text-red-600 text-lg font-bold">193</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800">Polícia</h3>
              <p className="text-blue-600 text-lg font-bold">190</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium text-green-800">SAMU</h3>
              <p className="text-green-600 text-lg font-bold">192</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;
