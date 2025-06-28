import { useState } from "react";
import axios from "axios";
//toast mesajları için import yapılıyor.
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FakePost = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
//Sunucuya veri gönderme işlemini yapıyoruz.
  const handlePost = async () => {
    try {
        //jsonplaceholder apisine post isteği gönderiyoruz.
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "Gül",
          body: "Frontend Developer",
          userId: 1,
        }
      );
      //Başarılı ise veriyi kaydet,hata varsa temizle.
      setResponseData(response.data);
      setError(null);
      toast.success("Veri başarıyla gönderildi!");
    } catch (err) {
      console.error("POST hatası:", err);
      setError("Sunucu isteği reddetti.");
      setResponseData(null);
      toast.error("Gönderim başarısız oldu!");
    }
  };

  return (
    <div className="p-6 text-center">
      <button
        onClick={handlePost}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Sunucuya Veri Gönder
      </button>

      {responseData && (
        <pre className="mt-4 bg-green-100 text-left p-3 rounded text-sm overflow-x-auto">
          {JSON.stringify(responseData, null, 2)}
        </pre>
      )}

      {error && (
        <div className="mt-4 bg-red-100 text-red-700 p-3 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default FakePost;