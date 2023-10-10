import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const ContactForm = () => {
  return (
    <form name="contact_form" method="post" className="space-y-12 text-gray-600 dark:text-gray-300">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
            <label className="block mb-2 text-gray-600 dark:text-gray-300 required" htmlFor="contact_form_name">What&apos;s your name ?</label>
            <Input
            className='w-full px-5 py-6 rounded-3xl' 
            placeholder="Your name" 
            required
            />
        </div>
        <div className="space-y-2">
          <label className="block mb-2 text-gray-600 dark:text-gray-300 required" htmlFor="contact_form_email">What&apos;s your email ?</label>
          <Input
          className='w-full px-5 py-6 rounded-3xl' 
          placeholder="Your email" 
          required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="block mb-2 text-gray-600 dark:text-gray-300 required" 
        htmlFor="contact_form_subject">
          How can we help ?
        </label>
        <Input
        className='w-full px-5 py-6 rounded-3xl'
        name="help"
        required
        />
      </div>
      <div className="space-y-2">
          <label className="block mb-2 text-gray-600 dark:text-gray-300 required" htmlFor="contact_form_budget">Budget</label>
          <Select>
            <SelectTrigger className="w-full h-full px-5 py-4 rounded-3xl">
              <SelectValue placeholder="Select a budjet" />   
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="$500 - $1500">$500 - $1500</SelectItem>
              <SelectItem value="$1500 - $5000">$1500 - $5000</SelectItem>
              <SelectItem value="$5000 - $10.000">$5000 - $10.000</SelectItem>
              <SelectItem value="$10.000 - Beyond">$10.000 - Beyond</SelectItem>
            </SelectContent>
          </Select>
      </div>
      <div className="space-y-2">
          <label className="block mb-2 text-gray-600 dark:text-gray-300 required" htmlFor="contact_form_message">Message</label>
          <Textarea
          required 
          rows={10}
          placeholder="Feel free to include all details"
          className='w-full px-5 py-6 rounded-3xl' 
          />
      </div>
      
      <button type="submit" className="relative ml-auto w-full flex h-11 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
        <span className="leading-3 relative text-base font-semibold text-white dark:text-gray-900">
          Send message
        </span>
      </button>
  </form>
  )
}

export default ContactForm