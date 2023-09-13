import '@/app/globals.css'
import { AlertCircle, FileWarning, Terminal } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import Image from 'next/image'

const Alerts = ({alert}) => {
  return (
    <Alert className={`flex items-center justify-center flex-row gap-5 w-full md:w-2/3 lg:w-2/5 mt-5 ${alert.error ? 'border-red-500 border-2 rounded' : 'from-cyan-400 to-cyan-600'}`}>
        <div className='max-w-full h-auto'>
          <Image
            src="/img/alert_morty.png"
            width={90}
            height={90}
            fit="contain"
            alt="alert morty"
            priority="true"
          />
        </div>

        <div className='flex items-center justify-center flex-col gap-5'>
         {/*<AlertTitle>{alert.tittle}</AlertTitle>*/}
            <AlertDescription>
              <p className='text-center text-base'>{alert.message}</p>
            </AlertDescription>
        </div>

    </Alert>
  )
}

export default Alerts;