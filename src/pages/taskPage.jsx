import { useSearchParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center ">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute left-0 top-0 bottom-0 text-slate-100"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-slate-600 text-xl text-white font-bold">
            {title}
          </h2>
          <p className="text-white text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
