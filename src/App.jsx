import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import LoadingSpinner from './components/LoadingSpinner';
import { ResumeProvider } from './hooks/useResumes';
import { JobOpportunitiesProvider } from './hooks/useJobOpportunities';
import { AppliedJobsProvider } from './hooks/useAppliedJobs';
import { AssignmentsProvider } from './hooks/useAssignments';
import SmartApplyLanding from './components/SmartApplyLanding';
import DepthEffectHero from './components/landing-page/Hero2';
import LandingPage from './components/landing-page-2/LandingPage';





function AppRoutes() {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <Routes>
            
            <Route
                path="*"
                element={<LandingPage/>}
            />
        </Routes>
    );
}

function App() {
    return (
        <AuthProvider>
            <ResumeProvider>
                <JobOpportunitiesProvider>
                    <AppliedJobsProvider>
                        <AssignmentsProvider>
                            <AppRoutes />
                        </AssignmentsProvider>
                    </AppliedJobsProvider>
                </JobOpportunitiesProvider>
            </ResumeProvider>
        </AuthProvider>
    );
}

export default App;
