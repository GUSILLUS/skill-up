type Props = {
  error: string;
}

export const ErrorMessage = ({ error }: Props) => (
  <div className="w-[200px]">
    
    {error === 'strenge' ? (
    <>
      <p className="text-red-400 text-sm">Must Contain:</p>
      <p className="text-red-400 text-xs">- 8 Characters</p>
      <p className="text-red-400 text-xs">- One Uppercase</p>
      <p className="text-red-400 text-xs">- One Lowercase</p>
      <p className="text-red-400 text-xs">- One Number</p>
      <p className="text-red-400 text-xs">- One Special Case Character</p>
    </>
    ) : <p className="text-red-400 text-sm">{error}</p>}
  </div>
  
)