

document.getElementById('deletePackageForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission
  
    const packageSelect = document.getElementById('packageSelect');
    const packageId = packageSelect.value;
  
    if (packageId === 'Choose...') {
      alert('Please select a package to delete');
      return;
    }
  
    try {
      const response = await fetch(`/packages/${packageId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert('Package deleted successfully');
        location.reload(); // Reload the page to reflect changes
      } else {
        alert('Failed to delete package');
      }
    } catch (err) {
      console.log(err);
      alert('Something went wrong, please try again');
    }
  });
  
