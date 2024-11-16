import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit';

const IDKitWidgetComponent = () => {

   

  const handleVerify = async (response: any) => {
    const res = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response),
    });
    if (!res.ok) {
      throw new Error('Verification failed.');
    
    }
  };

  const onSuccess = () => {
    console.log('Verification successful!');
  };

  return (
    <IDKitWidget
      app_id='app_staging_29b77498a571ddce4fa0f18a79964122'
      action='vitalik-jovanovic'
      onSuccess={onSuccess}
      handleVerify={handleVerify}
      verification_level={VerificationLevel.Device}
    >
      {({ open }) => <button onClick={open}><strong>World ID</strong></button>}
    </IDKitWidget>
  );
};

export default IDKitWidgetComponent;
