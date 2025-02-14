import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function loadCustomers() {
      const snapshot = await getDocs(collection(db, "customers"));
      setCustomers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
    loadCustomers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
